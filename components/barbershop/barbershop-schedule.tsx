"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { ptBR } from "date-fns/locale";

interface BarbershopScheduleProps {
  barbershopId: string;
}

export function BarbershopSchedule({ barbershopId }: BarbershopScheduleProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  return (
    <Card className="sticky top-4">
      <CardHeader className="px-4 pb-3">
        <CardTitle>Agendar Horário</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4 space-y-4">
        <div className="p-2 border rounded-md">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            locale={ptBR}
            className="w-full"
            classNames={{
              root: "w-full",
              months: "w-full",
              month: "w-full",
              caption: "w-full flex justify-between",
              caption_label: "text-sm font-medium",
              nav: "flex items-center",
              nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
              table: "w-full border-collapse",
              head_row: "flex w-full",
              head_cell: "w-9 font-normal text-muted-foreground text-[0.8rem]",
              row: "flex w-full mt-2",
              cell: "text-center text-sm relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 h-9 w-9",
              day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
              day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
              day_today: "bg-accent text-accent-foreground",
              day_outside: "opacity-50",
              day_disabled: "opacity-50",
              day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
              day_hidden: "invisible",
            }}
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Horários Disponíveis</h3>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione um horário" />
            </SelectTrigger>
            <SelectContent>
              {availableTimes.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full">Confirmar Agendamento</Button>
      </CardContent>
    </Card>
  );
}