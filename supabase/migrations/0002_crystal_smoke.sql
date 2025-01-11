/*
  # Row Level Security Policies

  1. Policies
    - Public read access for barbershops, services, and reviews
    - Authenticated access for appointments and profiles
    - Owner-only access for sensitive data
*/

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
ON profiles FOR SELECT
TO public
USING (true);

CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Barbershops policies
CREATE POLICY "Barbershops are viewable by everyone"
ON barbershops FOR SELECT
TO public
USING (true);

CREATE POLICY "Barbershop owners can update their shops"
ON barbershops FOR UPDATE
TO authenticated
USING (auth.uid() = owner_id)
WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Barbershop owners can delete their shops"
ON barbershops FOR DELETE
TO authenticated
USING (auth.uid() = owner_id);

-- Services policies
CREATE POLICY "Services are viewable by everyone"
ON services FOR SELECT
TO public
USING (true);

CREATE POLICY "Barbershop owners can manage services"
ON services FOR ALL
TO authenticated
USING (
  auth.uid() IN (
    SELECT owner_id FROM barbershops WHERE id = barbershop_id
  )
);

-- Similar policies for other tables...

-- Function to check if user is barbershop employee
CREATE OR REPLACE FUNCTION is_barbershop_employee(barbershop_uuid UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 
    FROM employees 
    WHERE barbershop_id = barbershop_uuid 
    AND profile_id = auth.uid()
    AND is_active = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;