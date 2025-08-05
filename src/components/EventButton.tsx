import { EVENT_LINK } from '../constants';


function EventButton() {
    return (
        <div className="fixed bottom-6 right-2 sm:right-6 z-50">
            <a
                href={EVENT_LINK}
                target="_blank"
                className="bg-secondary-500 hover:bg-secondary-700 text-primary-100 px-4 py-2 sm:px-5 sm:py-3 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center gap-3 sm:gap-4 max-w-xs sm:max-w-none"
            >
                <span className="flex items-center justify-center" style={{ width: 28, height: 28 }}>
                    <img src="/assets/icons/ticket.svg" alt="Ticket" width={28} height={28} />
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-semibold text-sm sm:text-base">Compre Já!</span>
                </div>
            </a>
        </div>
    );
}

export default EventButton;
