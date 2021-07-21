import React,{useState} from 'react';
import './Nav.css';

const Nav = () => {
    const [isOpen, setNav] = useState(false);
    const addMenu = () => {
        setNav(true);
    };
    const removeMenu = () => {
        setNav(false);
    }

    return(
    <header onMouseLeave={removeMenu}>
        <nav className="navbar">
            <div className="navbar_logo">
            wanted
            </div>
            <ul className="navbar_menu">
                <li className="navbar_toggleBtn" onMouseOver={addMenu}><a href="#">탐색</a></li>
                <li><a href="#">커리어 성장</a></li>
                <li className="able"><a href="#">직군별 연봉</a></li>
                <li className="able"><a href="#">이력서</a></li>
                <li className="able"><a href="#">매치업</a></li>
                <li className="able"><a href="#">프리랜서</a></li>
            </ul>
            <ul className="navbar_icons">
                <li><i className="fas fa-search"></i></li>
                <li><i className="fas fa-bell"></i></li>
                <li className="maximum"><i className="far fa-user"></i></li>
                <li className="minimum"><i className="fas fa-bars"></i></li>
            </ul>
        </nav>
        <ul className={isOpen ? 'active' : 'submenu'}>
            <ul>
                영업
                <li>기업영업</li>
                <li>외부영업</li>
                <li>영업관리자</li>
                <li>기술영업</li>
                <li>주요고객사 담당자</li>
                <li>솔루션 컨설턴트</li>
                <li>해외영업</li>
                <li>더보기</li>
            </ul>
            <ul>미디어
                <li>콘텐츠 크리에이터</li>
                <li>PD</li>
                <li>영상 편집기</li>
                <li>에디터</li>
                <li>비디오 제작</li>
                <li>작가</li>
                <li>출판 기획자</li>
                <li>더보기</li>
            </ul>
            <ul>인사
                <li>인사담당</li>
                <li>리크루터</li>
                <li>조직문화</li>
                <li>평가 보상</li>
                <li>헤드헌터</li>
                <li>HRD</li>
                <li>HRBP</li>
                <li>더보기</li>
            </ul>
            <ul>게임 제작
                <li>게임 기획자</li>
                <li>게임 그래픽 디자이너</li>
                <li>모바일 게임 개발자</li>
                <li>게임 클라이언트 개발자</li>
                <li>게임 아티스트</li>
                <li>유니티 개발자</li>
                <li>게임 서버 개발자</li>
                <li>더보기</li>
            </ul>
            <ul>금융
                <li>회계담당</li>
                <li>재무 담당자</li>
                <li>IR</li>
                <li>투자 증권</li>
                <li>재무 분석가</li>
                <li>애널리스트</li>
                <li>내부통제 담당자</li>
                <li>더보기</li>
            </ul>
            <ul>
                <ul>엔지니어링·설계</ul>
                <ul>물류·무역</ul>
                <ul>제조·생산</ul>
                <ul>의료·제약·바이오</ul>
                <ul>교육</ul>
                <ul>법률·법집행기관</ul>
                <ul>식·음료</ul>
                <ul>건설·시설</ul>
                <ul>공공·복지</ul>
            </ul>
        </ul>
    </header>
    )
};

export default Nav;
