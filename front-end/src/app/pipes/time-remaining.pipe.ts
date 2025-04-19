// src/app/pipes/time-remaining.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Pipe({
  name: 'timeRemaining',
})
export class TimeRemainingPipe implements PipeTransform {
  transform(dueDate?: Date): string {
    if (!dueDate) return 'Sem data limite';

    const now = new Date();
    if (dueDate < now) {
      return `Vencido ${formatDistanceToNow(dueDate, { locale: ptBR })} atrás`;
    }
    return `Vence em ${formatDistanceToNow(dueDate, { locale: ptBR })}`;
  }
}
