export class AlertApp {
  mensagem: string;
  tipo: string;
  actionText: string;
  closeable: any;
  visible: any;
  //
  constructor(mensagem?: string, tipo?: string, actionText?: string, closeable?: any, visible?: any) {
    this.mensagem = mensagem || null;
    this.tipo = tipo || null;
    this.actionText = actionText || null;
    this.closeable = closeable || false;
    this.visible = visible || false;
  }
}
