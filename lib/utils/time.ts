export function generateTimeSlots(
  startHour = 9,
  endHour = 19,
  interval = 30
): string[] {
  const slots: string[] = [];
  const totalMinutes = (endHour - startHour) * 60;
  const totalSlots = totalMinutes / interval;

  for (let i = 0; i <= totalSlots; i++) {
    const minutes = i * interval;
    const hour = Math.floor(startHour + minutes / 60);
    const minute = minutes % 60;
    slots.push(
      `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
    );
  }

  return slots;
}