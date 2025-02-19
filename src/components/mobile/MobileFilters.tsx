import * as React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSearchState } from "@yext/search-headless-react";
import Facets from "../search/Facets";

type MobileFiltersProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MobileFilters = ({ open, setOpen }: MobileFiltersProps) => {
  const resultsCount = useSearchState((state) => state.vertical.resultsCount);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white shadow-xl">
              <div className="flex px-4 pt-5 pb-2 justify-between">
                <h2 className="text-xl font-medium text-sky-400">Filters</h2>
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="px-4 py-2">
                <Facets />
              </div>
              <div className="absolute inset-x-0 bottom-4 h-16 ">
                <button
                  type="button"
                  className="w-56 py-4 flex justify-center rounded-lg border mx-auto bg-sky-400 text-white shadow-sm"
                >
                  {`Show Results (${resultsCount})`}
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileFilters;
