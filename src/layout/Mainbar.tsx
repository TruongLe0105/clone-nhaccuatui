import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { PATH } from '../helpers/constant';
import { ItemMenu, listMenu } from './types';

const Mainbar = () => {
    const [openMenu, setOpenMenu] = useState<Boolean>(true);

    const handleMenuPage = () => {
        // setOpenMenu(true);
    }

    const renderIconMenu = (item: ItemMenu) => {
        switch (item.path) {
            case PATH.search:
                return <SearchIcon />;
            case PATH.home:
                return <SearchIcon />
            case PATH.discover:
                return <SearchIcon />
        }
    }

    return (
        <Grid
            container
            // spacing={2}
            sx={{
                width: "var(--width_bar)",
            }}
        >
            {listMenu.map((item: ItemMenu) => (
                <div
                    onClick={handleMenuPage}
                >
                    {renderIconMenu(item)}
                    {openMenu && (
                        <Typography>
                            {item.label}
                        </Typography>
                    )}
                </div>
            ))}
        </Grid>
    )
}

export default Mainbar;