import React from "react";
import { HiOutlinePhotograph } from "@react-icons/all-files/hi/HiOutlinePhotograph";
import { IoIosContact } from "@react-icons/all-files/io/IoIosContact";
import { Breadcrumbs } from "@material-tailwind/react";
import { BiMap } from "@react-icons/all-files/bi/BiMap";
import logo from "../src/small.png"
import Carousel from "./Carousel";
import SocialMedia from "./SocialMedia";
import { IoCloseCircle} from "@react-icons/all-files/io5/IoCloseCircle"
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function PopoverPlacement() {
  const [open, setOpen ] = React.useState(false);
  const [open1, setOpen1 ] = React.useState(false);
  const [open2, setOpen2 ] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const handleOpen1 = () => setOpen1(!open1);
  const handleOpen2 = () => setOpen2(!open2);

  return (
    <>
      <Breadcrumbs className="block-crumbs">
        <HiOutlinePhotograph onClick={handleOpen} className="hover:text-blue-600 p w-8 h-8" />
        <IoIosContact onClick={handleOpen1} className="hover:text-purple-600 c w-8 h-8"/>
        <BiMap onClick={handleOpen2} className="hover:text-green-600 m w-8 h-8"/>
      </Breadcrumbs>
      <Dialog className="w-auto h-auto dialog" open={open} handler={handleOpen}>
        <DialogHeader  className="gallery">Галерея <img className=" rounded-md w-24 h-20 absolute top-1 right-1 object-cover object-center" src={logo} alt="logo" /></DialogHeader>
        <DialogBody className="gallery-text">
        <Carousel/>
          </DialogBody>
        <DialogFooter>
          <IoCloseCircle
            onClick={handleOpen}
            className=" text-gray-800 mr-1  hover:text-red-800 w-10 h-10 "
          />
        </DialogFooter>
      </Dialog>
      <Dialog open={open1} handler={handleOpen1}>
        <DialogHeader>Контакти <img className=" rounded-md w-24 h-20 absolute top-1 right-1 object-cover object-center" src={logo} alt="logo" /></DialogHeader>
        <DialogBody className="dialog-body-scroll">
          It looks like you're trying to sanitize user input to prevent script injection attacks in your React application. The function you've provided uses jQuery to escape script tags from user inputs. However, in a React application, you should rely on React's built-in mechanisms for handling user input safely, rather than manipulating the DOM directly with jQuery.

          React automatically escapes all strings rendered in JSX before rendering them. Unless you're using dangerouslySetInnerHTML, you typically won't need to manually escape input as React does this for you.

          However, if you're handling raw HTML or injecting HTML into the DOM, which is not recommended, you'll need to ensure that the content is sanitized. For those cases, you could use a library like DOMPurify to sanitize the content before it's used.

          Here's how you can sanitize user input in React without jQuery:

          It looks like you're trying to sanitize user input to prevent script injection attacks in your React application. The function you've provided uses jQuery to escape script tags from user inputs. However, in a React application, you should rely on React's built-in mechanisms for handling user input safely, rather than manipulating the DOM directly with jQuery.

          React automatically escapes all strings rendered in JSX before rendering them. Unless you're using dangerouslySetInnerHTML, you typically won't need to manually escape input as React does this for you.

          However, if you're handling raw HTML or injecting HTML into the DOM, which is not recommended, you'll need to ensure that the content is sanitized. For those cases, you could use a library like DOMPurify to sanitize the content before it's used.

          Here's how you can sanitize user input in React without jQuery:
          <SocialMedia />
        </DialogBody>
        <DialogFooter>
        <IoCloseCircle
            onClick={handleOpen1}
            className=" text-gray-800 mr-1 content-center hover:text-red-800 w-10 h-10 "
          />
        </DialogFooter>
      </Dialog>
      <Dialog open={open2} handler={handleOpen2}>
        <DialogHeader>Локація <img className=" rounded-md w-24 h-20 absolute top-1 right-1 object-cover object-center" src={logo} alt="logo" /></DialogHeader>
        <DialogBody>
          <div className=" my-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.8477747492925!2d30.387084932042264!3d50.39654847977915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb12b3f052c3%3A0x67ee1f3ac5fb1b3c!2z0J3QsNGB0YLRltC70YzQvdC40Lkg0YLQtdC90ZbRgSDQvdCwINCW0Jog0KHQvtGE0ZbRjyB8INCd0LDRgdGC0L7Qu9GM0L3Ri9C5INGC0LXQvdC90LjRgSB8IFBpbmcgcG9uZw!5e0!3m2!1suk!2suk!4v1699404320563!5m2!1suk!2suk" width="590" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
          </div>
        </DialogBody>
        <DialogFooter>
        <IoCloseCircle
            onClick={handleOpen2}
            className=" text-gray-800 mr-1 content-center hover:text-red-800 w-10 h-10 "
          />
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default PopoverPlacement
