let defaultMessages = {
  date: 'Data',
  time: 'Hora',
  event: 'Evento',
  allDay: 'Todo o dia',
  week: 'Semana',
  work_week: 'Semana de trabalho',
  day: 'Dia',
  month: 'Mês',
  previous: 'Anterior',
  next: 'Próximo',
  yesterday: 'Ontem',
  tomorrow: 'Amanhã',
  today: 'Hoje',
  agenda: 'Agenda',

  noEventsInRange: 'Não há eventos neste período.',

  showMore: (total) => `+${total} more`,
}

export default function messages(msgs) {
  return {
    ...defaultMessages,
    ...msgs,
  }
}
