'use client'
import Image from 'next/image'
import {
  AppBar,
  Box,
  Button,
  Divider,
  CssBaseline,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Toolbar,
  Typography
} from '@mui/material'
import  MenuIcon  from '@mui/icons-material/Menu';
import React, { useState } from 'react';

export default function Home() {
  const [state, setState] = React.useState({
    menu: false
  });

  const toggleDrawer =
    (anchor: 'menu', open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: 'menu') => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{width: '100%'}}>
        <Link href='/' sx={{textDecoration: 'none', color: 'inherit'}}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Box>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <React.Fragment>
        <Button onClick={toggleDrawer('menu', true)} sx={{"&:hover": {backgroundColor: "transparent", }}} className='menu' disableFocusRipple disableRipple>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon style={{color:'rgb(253 230 138)'}}/>
            </IconButton>
          </Button>
        <SwipeableDrawer
          hideBackdrop={false}
          PaperProps={{
            sx: {backgroundColor:"rgb(253 230 138)", fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}
          }}
          open={state['menu']}
          onClose={toggleDrawer('menu', false)}
          onOpen={toggleDrawer('menu', true)}
          transitionDuration={450}
        >
          {list('menu')}
        </SwipeableDrawer>
        </React.Fragment>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/aboutHomesLogo.jpg"
          alt="About Homes Renovations Logo"
          width={380}
          height={77}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-amber-200 hover:text-white mb-3 text-2xl font-semibold`}>
            About{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Get to know our Mission and Personnel.
          </p>
        </a>

        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-amber-200 hover:text-white mb-3 text-2xl font-semibold`}>
            Gallery{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            View examples of our previous and current projects.
          </p>
        </a>

        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-amber-200 hover:text-white mb-3 text-2xl font-semibold`}>
            Contact Us{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Reach out to our expert team for any inquiry.
          </p>
        </a>

        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-amber-200 hover:text-white mb-3 text-2xl font-semibold`}>
            Reviews{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Read feedback from our satisfied customers.
          </p>
        </a>
      </div>
    </main>
  )
}
