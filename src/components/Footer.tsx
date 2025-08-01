import { CRP } from '../constants';

function Footer() {
    return (
        <footer>
            <div className="w-full text-center text-font bg-tertiary-300 py-1 rounded-none flex items-center justify-center">
                <p className="text-lg text-font">&copy; 2025 Lara Frasson - CRP {CRP} - Todos os direitos reservados | Desenvolvido por <a href="https://github.com/kainamf" target="_blank" rel="noopener noreferrer" className="underline hover:text-font">Kainã Freitas</a></p>
            </div>
        </footer>
    );
}

export default Footer;
