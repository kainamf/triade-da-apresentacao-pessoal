import { EVENT_LINK } from '../constants';


function EventButton() {
    return (
        <div className="fixed bottom-6 right-2 sm:right-6 z-50">
            <a
                href={EVENT_LINK}
                target="_blank"
                className="bg-secondary-500 hover:bg-secondary-700 text-primary-100 p-3 sm:p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center gap-2 sm:gap-3 max-w-xs sm:max-w-none"
            >
                <span className="flex items-center justify-center" style={{ width: 24, height: 24 }}>
                    <img src="/assets/icons/ticket.svg" alt="Ticket" width={24} height={24} />
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-semibold text-xs sm:text-sm">Compre Já!</span>
                </div>
            </a>
        </div>
    );
}

export default EventButton;
