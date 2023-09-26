import { useContext, useState } from "react";
import ReactSwitch from "react-switch"
import { ThemeContext } from "../Contexts/ThemeContext";

export default function ThemeSelector() {

    const [checked, setChecked] = useState(false);

    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = nextChecked => {
        setChecked(nextChecked);

        if (theme === "red") {
            setTheme("purple")
        } else {
            setTheme("red")
        }

    };

    return (
        <>
            <div className={'theme_selector' + ' ' + theme}>
                <ReactSwitch
                    className="theme_selector_switch"
                    onChange={handleChange}
                    checked={checked}
                    offColor="#2E1E3A"
                    onColor="#D6003D"
                    offHandleColor="#2E1E3A"
                    onHandleColor="#D6003D"
                    handleDiameter={10}
                    height={30}
                    width={100}
                    borderRadius={15}
                    activeBoxShadow="0px 0px 0px 0px #ffffff"
                    uncheckedIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 10,
                                color: "#D6003D",
                                paddingRight: 10
                            }}
                        >
                            Purple
                        </div>
                    }
                    checkedIcon={
                        <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 10,
                            color: "#2E1E3A",
                            // paddingRight: 2
                        }}
                    >
                        Red
                    </div>
                    }
                    uncheckedHandleIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 10
                            }}
                        >
                            Theme
                        </div>
                    }
                    checkedHandleIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                paddingRight: 5,
                                alignItems: "center",
                                height: "100%",
                                fontSize: 10
                            }}
                        >
                            Theme
                        </div>
                    }
                />
            </div>
        </>
    )
}