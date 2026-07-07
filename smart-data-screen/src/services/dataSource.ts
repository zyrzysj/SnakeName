export type DataSource = 'mock' | 'api'

export const getDataSource = (): DataSource => {
  const source = import.meta.env.VITE_DATA_SOURCE
  return source === 'api' ? 'api' : 'mock'
}

export const isMockSource = () => getDataSource() === 'mock'
