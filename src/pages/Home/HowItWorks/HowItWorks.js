import { IoSearchCircleOutline } from 'react-icons/io5';
import { GrSelect } from 'react-icons/gr';
import { SiYourtraveldottv } from 'react-icons/si';
import { TitleStyled } from '../../../styledComponents/TitleStyled';

const HowItWorks = () => (
  <div className="py-24 container mx-auto ">
    <TitleStyled className="text-center">How it works</TitleStyled>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      <div>
        <IoSearchCircleOutline className="text-6xl mx-auto" />
        <h3 className="text-center text-2xl font-semibold mt-4">
          Find your ride
        </h3>
      </div>
      <div>
        <GrSelect className="text-6xl mx-auto" />
        <h3 className="text-center text-2xl font-semibold mt-4">
          Select & Book
        </h3>
      </div>
      <div>
        <SiYourtraveldottv className="text-6xl mx-auto" />
        <h3 className="text-center text-2xl font-semibold mt-4">
          Travel Together
        </h3>
      </div>
    </div>
  </div>
);

export default HowItWorks;
