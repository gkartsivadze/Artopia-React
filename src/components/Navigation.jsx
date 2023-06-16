import React, {useEffect, useState} from "react"

export default function Navigation() {

    const [moved, setMoved] = useState(false);
    const [navigation, setNavigation] = useState(false);
    const [menu, setMenu] = useState(false);
    document.addEventListener("scroll", () => document.documentElement.scrollTop > 50 ? setMoved(true) : setMoved(false))
    window.addEventListener("resize", menuState)
    function menuState() {
        window.innerWidth <= 800
            ?setNavigation(true)
            : setNavigation(false);
    }
    function toggleMenu() {
        setMenu(prev => !prev);
    }
    useEffect(() => {
        menuState();
    }, [])
    return <nav style={{
        backgroundImage: moved ? "linear-gradient(var(--black-1), transparent)" : "none",
        paddingTop: navigation ?  (moved ? "1rem" : "1.5rem") : (moved ? "1rem" : "2rem")
        }}>
            <svg width="131" height="38" viewBox="0 0 131 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.24 30C18.9733 30 18.8 29.8667 18.72 29.6L17.52 25.68C17.4667 25.5733 17.4 25.52 17.32 25.52H7.48C7.4 25.52 7.33333 25.5733 7.28 25.68L6.12 29.6C6.04 29.8667 5.86667 30 5.6 30H0.52C0.36 30 0.24 29.96 0.16 29.88C0.08 29.7733 0.0666667 29.6267 0.12 29.44L8.76 2.4C8.84 2.13333 9.01333 2 9.28 2H15.56C15.8267 2 16 2.13333 16.08 2.4L24.72 29.44C24.7467 29.4933 24.76 29.56 24.76 29.64C24.76 29.88 24.6133 30 24.32 30H19.24ZM8.72 20.92C8.69333 21.08 8.74667 21.16 8.88 21.16H15.92C16.08 21.16 16.1333 21.08 16.08 20.92L12.48 9.04C12.4533 8.93333 12.4133 8.89333 12.36 8.92C12.3067 8.92 12.2667 8.96 12.24 9.04L8.72 20.92ZM38.1559 9.16C39.1159 9.16 39.8759 9.34667 40.4359 9.72C40.6493 9.82667 40.7293 10.0267 40.6759 10.32L39.8359 14.88C39.8093 15.2 39.6226 15.2933 39.2759 15.16C38.8759 15.0267 38.4093 14.96 37.8759 14.96C37.6626 14.96 37.3693 14.9867 36.9959 15.04C36.0359 15.12 35.2226 15.48 34.5559 16.12C33.8893 16.7333 33.5559 17.56 33.5559 18.6V29.52C33.5559 29.6533 33.5026 29.7733 33.3959 29.88C33.3159 29.96 33.2093 30 33.0759 30H28.3959C28.2626 30 28.1426 29.96 28.0359 29.88C27.9559 29.7733 27.9159 29.6533 27.9159 29.52V9.92C27.9159 9.78667 27.9559 9.68 28.0359 9.6C28.1426 9.49333 28.2626 9.44 28.3959 9.44H33.0759C33.2093 9.44 33.3159 9.49333 33.3959 9.6C33.5026 9.68 33.5559 9.78667 33.5559 9.92V11.44C33.5559 11.52 33.5826 11.5733 33.6359 11.6C33.6893 11.6267 33.7293 11.6133 33.7559 11.56C34.8493 9.96 36.3159 9.16 38.1559 9.16ZM55.2628 13.48C55.2628 13.6133 55.2095 13.7333 55.1028 13.84C55.0228 13.92 54.9161 13.96 54.7828 13.96H50.9428C50.8095 13.96 50.7428 14.0267 50.7428 14.16V22.64C50.7428 23.52 50.9161 24.1733 51.2628 24.6C51.6361 25.0267 52.2228 25.24 53.0228 25.24H54.3428C54.4761 25.24 54.5828 25.2933 54.6628 25.4C54.7695 25.48 54.8228 25.5867 54.8228 25.72V29.52C54.8228 29.8133 54.6628 29.9867 54.3428 30.04C53.2228 30.0933 52.4228 30.12 51.9428 30.12C49.7295 30.12 48.0761 29.76 46.9828 29.04C45.8895 28.2933 45.3295 26.9067 45.3028 24.88V14.16C45.3028 14.0267 45.2361 13.96 45.1028 13.96H42.8228C42.6895 13.96 42.5695 13.92 42.4628 13.84C42.3828 13.7333 42.3428 13.6133 42.3428 13.48V9.92C42.3428 9.78667 42.3828 9.68 42.4628 9.6C42.5695 9.49333 42.6895 9.44 42.8228 9.44H45.1028C45.2361 9.44 45.3028 9.37333 45.3028 9.24V4.48C45.3028 4.34667 45.3428 4.24 45.4228 4.16C45.5295 4.05333 45.6495 4 45.7828 4H50.2628C50.3961 4 50.5028 4.05333 50.5828 4.16C50.6895 4.24 50.7428 4.34667 50.7428 4.48V9.24C50.7428 9.37333 50.8095 9.44 50.9428 9.44H54.7828C54.9161 9.44 55.0228 9.49333 55.1028 9.6C55.2095 9.68 55.2628 9.78667 55.2628 9.92V13.48ZM67.4647 30.32C65.2247 30.32 63.3047 29.7333 61.7047 28.56C60.1047 27.3867 59.0114 25.7867 58.4247 23.76C58.0514 22.5067 57.8647 21.1467 57.8647 19.68C57.8647 18.1067 58.0514 16.6933 58.4247 15.44C59.038 13.4667 60.1447 11.92 61.7447 10.8C63.3447 9.68 65.2647 9.12 67.5047 9.12C69.6914 9.12 71.558 9.68 73.1047 10.8C74.6514 11.8933 75.7447 13.4267 76.3847 15.4C76.8114 16.7333 77.0247 18.1333 77.0247 19.6C77.0247 21.04 76.838 22.3867 76.4647 23.64C75.878 25.72 74.7847 27.36 73.1847 28.56C71.6114 29.7333 69.7047 30.32 67.4647 30.32ZM67.4647 25.48C68.3447 25.48 69.0914 25.2133 69.7047 24.68C70.318 24.1467 70.758 23.4133 71.0247 22.48C71.238 21.6267 71.3447 20.6933 71.3447 19.68C71.3447 18.56 71.238 17.6133 71.0247 16.84C70.7314 15.9333 70.278 15.2267 69.6647 14.72C69.0514 14.2133 68.3047 13.96 67.4247 13.96C66.518 13.96 65.758 14.2133 65.1447 14.72C64.558 15.2267 64.1314 15.9333 63.8647 16.84C63.6514 17.48 63.5447 18.4267 63.5447 19.68C63.5447 20.88 63.638 21.8133 63.8247 22.48C64.0914 23.4133 64.5314 24.1467 65.1447 24.68C65.7847 25.2133 66.558 25.48 67.4647 25.48ZM99.0103 14.96C99.4903 16.32 99.7303 17.92 99.7303 19.76C99.7303 21.6 99.477 23.2667 98.9703 24.76C98.357 26.4667 97.3836 27.8267 96.0503 28.84C94.7436 29.8267 93.117 30.32 91.1703 30.32C89.2503 30.32 87.757 29.6533 86.6903 28.32C86.637 28.24 86.5836 28.2133 86.5303 28.24C86.477 28.2667 86.4503 28.32 86.4503 28.4V36.96C86.4503 37.0933 86.397 37.2 86.2903 37.28C86.2103 37.3867 86.1036 37.44 85.9703 37.44H81.2903C81.157 37.44 81.037 37.3867 80.9303 37.28C80.8503 37.2 80.8103 37.0933 80.8103 36.96V9.92C80.8103 9.78667 80.8503 9.68 80.9303 9.6C81.037 9.49333 81.157 9.44 81.2903 9.44H85.9703C86.1036 9.44 86.2103 9.49333 86.2903 9.6C86.397 9.68 86.4503 9.78667 86.4503 9.92V11.24C86.4503 11.32 86.477 11.3733 86.5303 11.4C86.5836 11.4 86.637 11.3733 86.6903 11.32C87.8103 9.85333 89.357 9.12 91.3303 9.12C93.1703 9.12 94.757 9.64 96.0903 10.68C97.4503 11.6933 98.4236 13.12 99.0103 14.96ZM92.8903 23.92C93.557 22.88 93.8903 21.4667 93.8903 19.68C93.8903 18 93.6103 16.6667 93.0503 15.68C92.437 14.5333 91.4503 13.96 90.0903 13.96C88.8636 13.96 87.9436 14.5333 87.3303 15.68C86.7703 16.64 86.4903 17.9867 86.4903 19.72C86.4903 21.5067 86.7836 22.8933 87.3703 23.88C87.9836 24.9467 88.8903 25.48 90.0903 25.48C91.2903 25.48 92.2236 24.96 92.8903 23.92ZM106.425 7.12C105.518 7.12 104.758 6.82667 104.145 6.24C103.558 5.62666 103.265 4.86667 103.265 3.96C103.265 3.02667 103.558 2.26667 104.145 1.68C104.731 1.09333 105.491 0.799999 106.425 0.799999C107.358 0.799999 108.118 1.09333 108.705 1.68C109.291 2.26667 109.585 3.02667 109.585 3.96C109.585 4.86667 109.278 5.62666 108.665 6.24C108.078 6.82667 107.331 7.12 106.425 7.12ZM104.025 30C103.891 30 103.771 29.96 103.665 29.88C103.585 29.7733 103.545 29.6533 103.545 29.52V9.88C103.545 9.74667 103.585 9.64 103.665 9.56C103.771 9.45333 103.891 9.4 104.025 9.4H108.705C108.838 9.4 108.945 9.45333 109.025 9.56C109.131 9.64 109.185 9.74667 109.185 9.88V29.52C109.185 29.6533 109.131 29.7733 109.025 29.88C108.945 29.96 108.838 30 108.705 30H104.025ZM121.78 9.12C123.513 9.12 125.06 9.42667 126.42 10.04C127.78 10.6267 128.833 11.44 129.58 12.48C130.353 13.52 130.74 14.68 130.74 15.96V29.52C130.74 29.6533 130.687 29.7733 130.58 29.88C130.5 29.96 130.393 30 130.26 30H125.58C125.447 30 125.327 29.96 125.22 29.88C125.14 29.7733 125.1 29.6533 125.1 29.52V28.2C125.1 28.12 125.073 28.0667 125.02 28.04C124.967 28.0133 124.913 28.04 124.86 28.12C123.74 29.5867 121.94 30.32 119.46 30.32C117.38 30.32 115.7 29.8133 114.42 28.8C113.14 27.7867 112.5 26.2933 112.5 24.32C112.5 22.2667 113.22 20.68 114.66 19.56C116.1 18.4133 118.153 17.84 120.82 17.84H124.9C125.033 17.84 125.1 17.7733 125.1 17.64V16.76C125.1 15.88 124.833 15.2 124.3 14.72C123.767 14.2133 122.967 13.96 121.9 13.96C121.073 13.96 120.38 14.1067 119.82 14.4C119.287 14.6933 118.94 15.1067 118.78 15.64C118.7 15.9333 118.527 16.0667 118.26 16.04L113.42 15.4C113.1 15.3467 112.953 15.2267 112.98 15.04C113.087 13.92 113.527 12.9067 114.3 12C115.1 11.0933 116.14 10.3867 117.42 9.88C118.727 9.37333 120.18 9.12 121.78 9.12ZM120.98 26.12C122.127 26.12 123.1 25.8133 123.9 25.2C124.7 24.5867 125.1 23.8 125.1 22.84V21.4C125.1 21.2667 125.033 21.2 124.9 21.2H122.02C120.82 21.2 119.873 21.4267 119.18 21.88C118.513 22.3333 118.18 22.9733 118.18 23.8C118.18 24.52 118.433 25.0933 118.94 25.52C119.447 25.92 120.127 26.12 120.98 26.12Z" fill="white"/>
            </svg>
            <div className="navigation-list" style={navigation ? {transform: menu ? "none" : "translate(100%)"} : {}}>
                <a href="#">Discover</a>
                <a href="#">Forum</a>
                <a href="#">News</a>
                <a href="#">Blog</a>
                {navigation ? <button className="btn btn-purple">Sign in</button> : ""}
            </div>
                {navigation ? <label className="hamburger-menu" id="menu-icon"><input type="checkbox" name="menu" id="hamburger" onChange={toggleMenu}/></label>
                            : <button className="btn btn-purple">Sign in</button>}
        </nav>
}