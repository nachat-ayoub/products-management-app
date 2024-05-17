const FormattedPrice = ({
  price,
  className = 'text-xl font-bold',
}: {
  price: number;
  className?: string;
}) => {
  return (
    <>
      <span className={className}>{price}</span> درهم
    </>
  );
};
export default FormattedPrice;
