import errorImg from "../assets/img/404.svg";

export default function NotFound() {
  return (
    <div className="flex justify-center flex-col my-8 items-center">
      <h1 className="text-[55px]">
        page not found
      </h1>
      <img
        className="w-180 "
        src={errorImg.src}
        alt="404 Not Found"
      />
    </div>
  );
}
