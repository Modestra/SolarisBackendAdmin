import { Links } from "../interfaces/header/headerInterfaces";

export function useLinks() {
  const links: Links[] = [
    { name: "Магазин", path: "/shop" },
    { name: "Учетная запись", path: "/account" },
    { name: "Конкурсы", path: "/competitions" },
    { name: "Сертификаты", path: "/certificates" },
    { name: "Почта", path: "/mail" },
    { name: "Пользователи", path: "/users" },
  ];

  return { links };
}
