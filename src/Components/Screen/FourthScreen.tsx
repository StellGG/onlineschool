import React from 'react';
import {Container, Typography} from "@mui/material";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";


const styleSliderItems = {
    width: "266px !important",
    height: "100%",
    border: "1px solid rgba(0, 0, 0, 0.5)",
    borderRadius: "20px",
    cursor: "poiner"
}

const FourthScreen = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: window.screen.width < 900 ? 1 : 3,
        slidesToScroll: 1,

    };
    return (
        <Container id="articles" sx={{width: "65%", marginTop: "70px", height: window.screen.width < 900 ? "500px" : "650px"}} >

            <Typography sx={{
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "30px",
                textTransform: "uppercase",
                color: "rgba(0, 0, 0, 0.5)",
                marginBottom: "20px"
            }} variant="h6" component="h2">
                Статьи
            </Typography>


            <Slider {...settings} className="sliderSlider">
                <Box sx={styleSliderItems}>
                    <img style={{width: "100%", height: "236px"}} src="/post1.png" alt="post1"/>


                    <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                        <div style={{
                            background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                            borderRadius: "50%",
                            width: "53px",
                            height: "53px",
                            position: "absolute",
                            top: "45%"
                        }}>
                            <Typography sx={{
                                fontFamily: "Mulish",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FFFFFF"
                            }} variant="h6" component="h2">
                                18
                                апр
                            </Typography>
                        </div>
                    </div>

                    <div style={{padding: "30px"}}>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "23px",
                            marginBottom: "10px"
                        }} variant="h4" component="h2">
                            Достоинства нашей автошколы
                        </Typography>

                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "20px"
                        }} variant="h6" component="h2">
                            Прежде чем начать писать эту статью, хочу Вам представиться, меня зовут Андрей Крючков...
                        </Typography>


                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px"
                        }}>
                            <div><Link style={{color: "#DB241C", textDecoration: "none"}} to="/article/Advantages-of-your-Auto-school">Читать далее</Link></div>
                            <div><img src="/Arrow%201.png" alt="arrow"/></div>
                        </div>
                    </div>
                </Box>
                <Box sx={styleSliderItems}>
                    <img style={{width: "100%", height: "236px"}} src="/post2.png" alt="post2"/>

                    <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                        <div style={{
                            background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                            borderRadius: "50%",
                            width: "53px",
                            height: "53px",
                            position: "absolute",
                            top: "45%"
                        }}>
                            <Typography sx={{
                                fontFamily: "Mulish",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FFFFFF"
                            }} variant="h6" component="h2">
                                10
                                апр
                            </Typography>
                        </div>
                    </div>
                    <div style={{padding: "30px"}}>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "23px",
                            marginBottom: "10px"
                        }} variant="h4" component="h2">
                            Как новичку выбрать автошколу
                        </Typography>

                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "20px"
                        }} variant="h6" component="h2">
                            Давайте быть честными перед собой, никто и никогда не разбирался во всех нюансах, которые
                            Вам...
                        </Typography>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                            color: "#DB241C"
                        }}>
                            <div><Link style={{color: "#DB241C", textDecoration: "none"}} to="/article/How-To-Choose-a-driving-school-for-a-beginner">Читать далее</Link></div>
                            <div><img src="/Arrow%201.png" alt="arrow"/></div>
                        </div>
                    </div>
                </Box>
                <Box sx={styleSliderItems}>
                    <img style={{width: "100%", height: "236px"}} src="/post3.png" alt="post3"/>

                    <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                        <div style={{
                            background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                            borderRadius: "50%",
                            width: "53px",
                            height: "53px",
                            position: "absolute",
                            top: "45%"
                        }}>
                            <Typography sx={{
                                fontFamily: "Mulish",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FFFFFF"
                            }} variant="h6" component="h2">
                                12
                                апр
                            </Typography>
                        </div>
                    </div>
                    <div style={{padding: "30px"}}>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "23px",
                            marginBottom: "10px"
                        }} variant="h4" component="h2">
                            С чего начать обучение в автошколе
                        </Typography>

                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "20px"
                        }} variant="h6" component="h2">
                            Поверьте, я не пытаюсь как-то призвать к совести «АВТОШКОЛЫ», нет, они как экономили, так и
                            будут...
                        </Typography>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px",
                            color: "#DB241C"
                        }}>
                            <div><Link style={{color: "#DB241C", textDecoration: "none"}} to="/article/How-to-start-studying-at-a-driving-school">Читать далее</Link></div>
                            <div><img src="/Arrow%201.png" alt="arrow"/></div>
                        </div>
                    </div>
                </Box>

            </Slider>

        </Container>
    );
};

export default FourthScreen;