"use client";

import { useState } from 'react';
import { AppointmentService } from '@/lib/services/appointment-service';
import { Database } from '@/lib/supabase/database.types';

type Appointment = Database['public']['Tables']['appointments']['Row'];

const appointmentService = new AppointmentService();

export function useAppointments(barbershopId: string, date: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const fetchAppointments = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await appointmentService.getAppointments(barbershopId, date);
      setAppointments(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch appointments'));
    } finally {
      setIsLoading(false);
    }
  };

  const createAppointment = async (appointment: Partial<Appointment>) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await appointmentService.createAppointment(appointment);
      setAppointments(prev => [...prev, data]);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to create appointment'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (
    id: string,
    status: 'confirmed' | 'cancelled' | 'completed'
  ) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await appointmentService.updateAppointmentStatus(id, status);
      setAppointments(prev => 
        prev.map(apt => apt.id === id ? data : apt)
      );
      return data;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update appointment'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    appointments,
    isLoading,
    error,
    fetchAppointments,
    createAppointment,
    updateStatus,
  };
}

export function useClientAppointments(clientId: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const fetchAppointments = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await appointmentService.getClientAppointments(clientId);
      setAppointments(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch appointments'));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    appointments,
    isLoading,
    error,
    fetchAppointments,
  };
}