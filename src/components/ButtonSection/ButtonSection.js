import React from 'react';
import { HiCursorClick } from 'react-icons/hi';
import classes from '../../style/Button.module.css';
import Button from '../Button';

const ButtonSection = () => {
   // == Petunjuk penggunaan ==
   // Buat button style terlebih dahulu, jika tidak ada  maka style akan menggunakan style default.
   // Import style yang diinginkan, contoh: style pada, Button.module.css
   // Content pada button di pass ke props children
   // Ketika ingin button memakai style tertentu, pass ke props buttonStyle dan isi value sesuai style yang diinginkan.
   // Ketika ingin ketika ingin pass click function pada props, pass ke props onClick dan isi function pada props value.

   const { btnPrimary, btnSecondary, btnDisabled } = classes;

   const handleClick = () => {
      console.log('Clicked');
   };

   return (
      <section>
         <Button
            buttonStyle={btnPrimary}
            btnType="button"
            btnDisabled={false}
            onClick={handleClick}
         >
            Primary Button
            <HiCursorClick />
         </Button>

         <Button
            buttonStyle={btnSecondary}
            btnType="submit"
            btnDisabled={false}
            onClick={handleClick}
         >
            Secondary Button
            <HiCursorClick />
         </Button>

         <Button
            buttonStyle={btnDisabled}
            btnType="button"
            btnDisabled={true}
            onClick={handleClick}
         >
            Disabled Button
         </Button>
      </section>
   );
};

export default ButtonSection;
