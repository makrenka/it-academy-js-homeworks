import './Header.scss';

export const Header = () => {
    return `
    <div class="container">
        <div class="header__wrapper">
            <div class="header__logo">
                <a href="#">
                    <img src="../assets/images/logo.svg" alt="logo">
                </a>
            </div>
            <nav class="header__navigation">
                <ul class="header__navigation-list">
                    <li class="header__navigation-list-item"><a href="#" class="header__navigation-link">Блог</a></li>
                    <li class="header__navigation-list-item"><a href="#" class="header__navigation-link">Курси</a></li>
                    <li class="header__navigation-list-item"><a href="#" class="header__navigation-link">Про мене</a></li>
                    <li class="header__navigation-list-item"><a href="#" class="header__navigation-link">Підписка на сайт</a></li>
                    <li class="header__navigation-list-item"><a href="#" class="header__navigation-link">Підтримка</a></li>
                </ul>
                <div class="header__languege-box">
                <div class="header__languege-box-item">
                    <a class="header__languege-box-link" href="#">UKR</a>
                </div>
                <div class="header__languege-box-item">
                    <a class="header__languege-box-link" href="#">ENG</a>
                </div>
            </div>
            </nav>            
        </div>
    </div>`;
}
