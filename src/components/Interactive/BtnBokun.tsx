"use client";

import { useState, lazy, Suspense, useMemo } from "react";
import { X } from "lucide-react";
import { type Lang } from "../../i18n/utils";
import { getI18N } from "../../i18n/index";

interface BtnModalBokunProps {
  bookingChannel: string;
  idCalendar: string;
  title: string;
  btnBook: string;
}

interface ComponentProps {
  data: BtnModalBokunProps;
  variant?: "accordion" | "sticky";
  lang?: Lang; 
}

const LazyLoadBokunScript = lazy(() => import("@/utils/loadBokun"));

export default function BtnAccordionBokun({
  data,
  variant = "accordion",
  lang = "en",
}: ComponentProps) {
  // Memoizamos i18n para evitar recalcular en cada re-render
  const i18n = useMemo(() => getI18N({ currentLocale: lang }) as any, [lang]);

  const [isOpen, setIsOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  if (variant === "sticky") {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-[#E77543] text-white py-4 rounded-full font-bold text-base shadow-md active:scale-95 transition-all mt-4 cursor-pointer"
        >
          {data.btnBook}
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            ></div>

            <div className="relative bg-[#EDF4FC] w-full h-[90vh] rounded-t-3xl p-6 shadow-2xl overflow-y-auto animate-in slide-in-from-bottom duration-300">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h3 className="font-serif text-xl text-[#001524]">
                  {data.title}
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <Suspense
                fallback={
                  <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#E77543]"></div>
                  </div>
                }
              >
                <LazyLoadBokunScript BookingChannel={data.bookingChannel} />
                <div
                  className="bokunWidget"
                  data-src={`https://widgets.bokun.io/online-sales/${data.bookingChannel}/experience-calendar/${data.idCalendar}`}
                ></div>
              </Suspense>
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <div className="w-full">
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        className={`w-full mt-6 py-3 rounded-lg font-semibold border-2 transition-all cursor-pointer ${
          showCalendar
            ? "bg-white border-[#E77543] text-[#E77543]"
            : "bg-[#E77543] border-[#E77543] text-white hover:bg-[#d66332]"
        }`}
      >
        {showCalendar
          ? i18n?.FULL_DAY_BEACH_EXPERIENCE?.FORM?.CALENDAR || "Close Calendar"
          : data.btnBook}
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          showCalendar
            ? "grid-rows-[1fr] mt-4 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden min-h-0">
          <div className="bg-white border border-gray-100 rounded-xl p-4">
            {showCalendar && (
              <Suspense
                fallback={
                  <div className="animate-spin h-5 w-5 border-b-2 border-[#E77543] mx-auto"></div>
                }
              >
                <LazyLoadBokunScript BookingChannel={data.bookingChannel} />
                <div
                  className="bokunWidget"
                  data-src={`https://widgets.bokun.io/online-sales/${data.bookingChannel}/experience-calendar/${data.idCalendar}`}
                ></div>
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}