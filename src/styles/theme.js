import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ['Raleway','sans-serif'].join(','),
        allVariants: {
            fontWeight: 500
        }
    }
})
export default theme;