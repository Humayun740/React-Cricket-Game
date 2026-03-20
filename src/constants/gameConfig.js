export const TOTAL_OVERS = 2
export const BALLS_PER_OVER = 6
export const TOTAL_BALLS = TOTAL_OVERS * BALLS_PER_OVER
export const TOTAL_WICKETS = 2

export const PROBABILITY_TABLES = {
  aggressive: [
    { outcome: 'W', probability: 0.22, label: 'Wicket' },
    { outcome: '0', probability: 0.08, label: 'Dot Ball' },
    { outcome: '1', probability: 0.16, label: '1 Run' },
    { outcome: '2', probability: 0.14, label: '2 Runs' },
    { outcome: '3', probability: 0.05, label: '3 Runs' },
    { outcome: '4', probability: 0.2, label: 'Four' },
    { outcome: '6', probability: 0.15, label: 'Six' },
  ],
  defensive: [
    { outcome: 'W', probability: 0.08, label: 'Wicket' },
    { outcome: '0', probability: 0.24, label: 'Dot Ball' },
    { outcome: '1', probability: 0.28, label: '1 Run' },
    { outcome: '2', probability: 0.18, label: '2 Runs' },
    { outcome: '3', probability: 0.07, label: '3 Runs' },
    { outcome: '4', probability: 0.1, label: 'Four' },
    { outcome: '6', probability: 0.05, label: 'Six' },
  ],
}

export const TEST_OUTCOME_SEQUENCES = {
  aggressive: ['4', 'W', '1', '6', '0', '2', '4', '1', 'W', '6', '0', '2'],
  defensive: ['1', '0', '2', '1', '0', '4', '1', '2', '0', '1', 'W', '1'],
}

export const COMMENTARY = {
  W: 'Wicket taken, rip',
  0: 'No run, :(',
  1: 'A single run was made',
  2: '2 runs counted',
  3: 'Three runs, good job',
  4: 'Four on the BOUNDARY',
  6: 'A Six in the sky',
}

export const STYLE_LABELS = {
  aggressive: 'Aggressive',
  defensive: 'Defensive',
}
