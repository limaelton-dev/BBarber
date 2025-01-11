/*
  # Auth Setup

  1. Enable Email Authentication
  2. Create auth triggers and functions
  3. Add RLS policies for auth tables
*/

-- Enable Email Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, type, full_name)
  VALUES (new.id, TG_ARGV[0]::user_type, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for client registration
DROP TRIGGER IF EXISTS on_auth_user_created_client ON auth.users;
CREATE TRIGGER on_auth_user_created_client
  AFTER INSERT ON auth.users
  FOR EACH ROW
  WHEN (new.raw_user_meta_data->>'type' = 'client')
  EXECUTE FUNCTION public.handle_new_user('client');

-- Trigger for barbershop registration
DROP TRIGGER IF EXISTS on_auth_user_created_barbershop ON auth.users;
CREATE TRIGGER on_auth_user_created_barbershop
  AFTER INSERT ON auth.users
  FOR EACH ROW
  WHEN (new.raw_user_meta_data->>'type' = 'barbershop')
  EXECUTE FUNCTION public.handle_new_user('barbershop');

-- RLS Policies
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own user data" ON auth.users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own user data" ON auth.users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);