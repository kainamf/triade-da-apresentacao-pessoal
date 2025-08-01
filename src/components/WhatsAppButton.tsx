import { MessageCircle } from 'react-feather';
import { WHATSAPP_LINK } from '../constants';


function WhatsAppButton() {
    return (
        <div className="fixed bottom-6 right-2 sm:right-6 z-50">
            <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="bg-secondary-900 hover:bg-secondary-700 text-font p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center gap-3"
            >
                <span className="flex items-center justify-center" style={{ width: 24, height: 24 }}>
                    <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
                </span>
                <span className="hidden sm:inline font-semibold text-background px-2 rounded">WhatsApp</span>
            </a>
        </div>
    );
}

export default WhatsAppButton;
