import { getDivisionById, type DivisionId } from '../data/content';

export interface WhatsAppConfig {
  phoneNumbers: Record<DivisionId, string>;
  defaultMessages: Record<DivisionId, string>;
}

export const WHATSAPP_CONFIG: WhatsAppConfig = {
  phoneNumbers: {
    MMC: '2347086080230',
    MPPS: '2348087874018',
    MHS: '2347030977820',
  },
  defaultMessages: {
    MMC: 'Hello Med-Vical Medical Centre, I would like to inquire about...',
    MPPS: 'Hello Med-Vical Supplies, I need information about...',
    MHS: 'Hello Med-Vical Health, I am interested in...',
  },
};

export function generateWhatsAppLink(divisionId: DivisionId, customMessage?: string): string {
  // MPPS uses the official online pharmacy short link
  if (divisionId === 'MPPS') {
    return 'https://wa.me/message/RK4MSSMD3MHCG1';
  }
  const division = getDivisionById(divisionId);
  const phone = division?.whatsappNumber ?? WHATSAPP_CONFIG.phoneNumbers[divisionId];
  const message = customMessage || WHATSAPP_CONFIG.defaultMessages[divisionId];
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
