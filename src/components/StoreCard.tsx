import Image from "next/image";

interface StoreCardProps {
  image: string;
  title: string;
  description: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ image, title, description }) => {
  return (
    <div className="w-full h-auto bg-white rounded-b-2xl overflow-hidden">
      <Image
        src={image}
        alt="Store Image"
        width={379}
        height={252}
        className="w-full object-cover"
      />
      <div className="px-4 sm:px-6 pt-4 sm:pt-[30px] lg:px-[30px] text-left pb-4 sm:pb-6 lg:pb-[26px]">
        <h3 className="text-xl sm:text-2xl text-grayPrimary leading-[30px] sm:leading-[33px] mb-1.5">
          {title}
        </h3>
        <p className="text-sm sm:text-base leading-[20px] sm:leading-[22px] text-grayPrimary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StoreCard;
