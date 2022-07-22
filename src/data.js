import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
const links = [
  {
    id: 1,
    url: '/',
    text: 'random',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

export const SideBar = () =>
  links.map((media) => {
    return (
      <li key={media.id}>
        <a href={media.url}>{media.text}</a>
      </li>
    );
  });

const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
];

export const Socials = () =>
  social.map((media) => {
    return (
      <li key={media.id}>
        <a href={media.url}>{media.icon}</a>
      </li>
    );
  });
