export default function Business() {
    return (
        <div>
            <div className="introContent">
                <h1>세라믹 부품 사업</h1>
                <div className="line"></div>
                <br></br>
                <br></br>
                <p className="mainArticle" style={{fontSize : 25}}>
                    친환경 자동차용, 반도체 장비용, 산업용으로
                    <br></br>알루미나(Al<sub>2</sub>O<sub>3</sub>),
                    질화규소(Si<sub>3</sub>N<sub>4</sub>) 등<br></br> 산화물 및 질화물 세라믹 부품과
                    히터 등을<br></br> 제조, 판매하고 있습니다</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="cardDesign">
                    <img className="cardImg" src={"/s7.jpg"}></img>
                    <div className="cardText">
                        <h4>자동차용 온도센서</h4>
                    </div>
                </div>
                <div className="line"></div>
                <br></br>
                <br></br>
                <div className="cardDesign">
                    <img className="cardImg" src={"/s8.png"}></img>
                    <div className="cardText">
                        <h4>세라믹히터 (알루미나)</h4>
                    </div>
                </div>
                <div className="line"></div>
                <br></br>
                <br></br>
                <div className="cardDesign">
                    <img className="cardImg" src={"/s9.png"}></img>
                    <div className="cardText">
                        <h4>세라믹히터 (질화규소)</h4>
                    </div>
                </div>
                <div className="line"></div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>시험, 고장 분석 및 신뢰성 평가 서비스</h1>
                <div className="line"></div>
                <br></br>
                <br></br>
                <p className="mainArticle" style={{fontSize : 25}}>
                    전기 자동차용 세라믹 부품 및 세라믹 히터,
                    히팅모듈 등의 <br></br>부품에 대한 시험평가와 고장분석,
                    수명평가를 위한 <br></br>신뢰성 평가 기법을 개발하고
                    서비스하고 있습니다
                </p>
                <br></br>
                <h3>-전기적 특성 평가<br></br>
                    <span className="detailText">( 내전압, 누설전류, 절연저항 )</span>
                </h3>
                <br></br>
                <h3>-기계적 특성 평가<br></br>
                    <span className="detailText">( 굽힘강도, 충격시험 )</span>
                </h3>
                <br></br>
                <h3>-고장분석</h3>
                <br></br>
                <h3>-신뢰성 평가<br></br>
                    <span className="detailText">( 가속수명시험 )</span>
                </h3>
            </div>
        </div>
    )
}