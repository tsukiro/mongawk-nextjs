export type Faqs = {
  error: any
  data: FAQItem[]
  count: any
  status: number
  statusText: string
}

interface FAQItem {
  question: string;
  answer: string;
}