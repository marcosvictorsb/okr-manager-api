import { LoggerMixin, EmailService } from "../../services";

class BaseGateway { constructor(...args: any[]) {} }
export const CreateCompanyMixin = EmailService(LoggerMixin(BaseGateway));

