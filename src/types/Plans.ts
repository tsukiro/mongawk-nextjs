export type Plans = {
  error: any
  data: Array<{
    id: string
    long_name: string
    short_name: string
    monthly_cost: number
    yearly_cost: number
    button_text: string
    currency: string
    short_description: string
    button_icon: string
    plan_color: string
    priority: number
  }>
  count: any
  status: number
  statusText: string
}