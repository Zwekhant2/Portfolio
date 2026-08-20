import { EcommerceIllustration } from './EcommerceIllustration'
import { ServerIllustration } from './ServerIllustration'
import { AwsIllustration } from './AwsIllustration'
import { ResearchIllustration } from './ResearchIllustration'
import { InvoicingIllustration } from './InvoicingIllustration'
import type { ProjectIllustration } from '../../data/projects'

export const illustrationMap: Record<ProjectIllustration, () => React.JSX.Element> = {
  ecommerce: EcommerceIllustration,
  server: ServerIllustration,
  aws: AwsIllustration,
  research: ResearchIllustration,
  invoicing: InvoicingIllustration,
}
