import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  BookingData,
  IBookingAllFitler,
  createBookingResource,
  deleteBookingResource,
  getBookingAll,
  getMyBookingResource,
  updateBookingResource,
} from "./action";
import {
  IDatePicker,
  setBookingAllFilter,
  setCurrentDate,
  setDatePicker,
  setMyBookingFilter,
} from "./reducer";
import { useSnackbar } from "store/app/selectors";
import { useEffect, useMemo, useState } from "react";
import { DataStatus } from "constant/enums";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import { NS_RESOURCE_PLANNING } from "constant/index";

export const useResourceFilter = () => {
  const { end_date, search_key, start_date, position, working_sort } =
    useAppSelector((state) => state.resourcePlanning.bookingAllFilter);
  const dispatch = useDispatch();

  const updateFilter = (filter: IBookingAllFitler) => {
    dispatch(setBookingAllFilter(filter));
  };

  return {
    end_date,
    search_key,
    position,
    working_sort,
    start_date,
    updateFilter,
  };
};

export const useResourceDate = () => {
  const { currentDate, datePicker } = useAppSelector(
    (state) => state.resourcePlanning,
  );
  const { dateRange, selectedDate } = datePicker;

  const dispatch = useAppDispatch();

  const updateDate = (date: IDatePicker) => {
    dispatch(setDatePicker(date));
  };

  const updateCurrentDate = (date: string) => {
    dispatch(setCurrentDate(date));
  };

  return {
    dateRange,
    selectedDate,
    updateDate,
    updateCurrentDate,
    currentDate,
  };
};

export const useBookingAll = () => {
  const { bookingAll, bookingAllError, bookingAllFilter, bookingAllStatus } =
    useAppSelector((state) => state.resourcePlanning);
  const { onAddSnackbar } = useSnackbar();
  const resourceT = useTranslations(NS_RESOURCE_PLANNING);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const { getMyBooking, myBookingFilter } = useMyBooking();

  const getBookingResource = async (params: IBookingAllFitler) => {
    const newParams = {
      ...params,
      start_date: params.start_date ?? dayjs().format("YYYY-MM-DD"),
      end_date: params.end_date ?? dayjs().format("YYYY-MM-DD"),
    };

    await dispatch(getBookingAll(params));
  };
  const onSetBookingFilter = (filter: IBookingAllFitler) => {
    dispatch(setBookingAllFilter(filter));
  };
  const isReady = useMemo(
    () => bookingAllStatus === DataStatus.SUCCEEDED,
    [bookingAllStatus],
  );

  const isLoading = useMemo(
    () => bookingAllStatus === DataStatus.LOADING,
    [bookingAllStatus],
  );

  const totalHour = useMemo(
    () => bookingAll.reduce((prev, item) => prev + item.total_hour, 0),
    [bookingAll],
  );
  const createBooking = async (
    data: BookingData,
    disableSnackbar?: boolean,
  ) => {
    setLoading(true);
    await dispatch(createBookingResource(data))
      .unwrap()
      .then(async () => {
        await Promise.all([
          getMyBooking(myBookingFilter),
          getBookingResource(bookingAllFilter),
        ]).then(() => {
          !disableSnackbar &&
            onAddSnackbar(resourceT("form.createSuccess"), "success");
          setLoading(false);
        });
      })
      .catch((err) => {
        !disableSnackbar && onAddSnackbar(err.message, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateBooking = async (
    data: BookingData,
    id: string,
    disableSnackbar?: boolean,
  ) => {
    setLoading(true);
    await dispatch(
      updateBookingResource({
        ...data,
        id,
      }),
    )
      .unwrap()
      .then(async () => {
        await Promise.all([
          getMyBooking(myBookingFilter),
          getBookingResource(bookingAllFilter),
        ]).then(() => {
          !disableSnackbar &&
            onAddSnackbar(resourceT("form.updateSuccess"), "success");
        });
      })
      .catch((err) => {
        !disableSnackbar && onAddSnackbar(err.message, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteBooking = async (id: string, disableSnackbar?: boolean) => {
    await dispatch(deleteBookingResource(id))
      .unwrap()
      .then(async () => {
        await Promise.all([
          getMyBooking(myBookingFilter),
          getBookingResource(bookingAllFilter),
        ]).then(() => {
          !disableSnackbar &&
            onAddSnackbar(resourceT("form.deleteSuccess"), "success");
        });
      })
      .catch((err) => {
        !disableSnackbar && onAddSnackbar(err.message, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  // useEffect(() => {
  //   if (bookingAllError) {
  //     onAddSnackbar(bookingAllError, "error");
  //   }
  // }, [bookingAllError]);
  return {
    bookingAllFilter,
    totalHour,
    createBooking,
    deleteBooking,
    isLoading,
    loading,
    isReady,
    updateBooking,
    bookingAll,
    bookingAllError,
    setBookingAllFilter: onSetBookingFilter,
    getBookingResource,
  };
};

export const useMyBooking = () => {
  const { myBooking, myBookingError, myBookingStatus, myBookingFilter } =
    useAppSelector((state) => state.resourcePlanning);
  const { onAddSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  const onSetMyBookingFilter = (filter: IBookingAllFitler) => {
    dispatch(setMyBookingFilter(filter));
  };
  const isReady = useMemo(
    () => myBookingStatus === DataStatus.SUCCEEDED,
    [myBookingStatus],
  );

  const isLoading = useMemo(
    () => myBookingStatus === DataStatus.LOADING,
    [myBookingStatus],
  );
  const getMyBooking = async (params: IBookingAllFitler) => {
    await dispatch(getMyBookingResource(params));
  };

  // useEffect(() => {
  //   if (myBookingError) {
  //     onAddSnackbar(myBookingError, "error");
  //   }
  // }, [myBookingError]);

  return {
    myBooking,
    myBookingError,
    myBookingFilter,
    isReady,
    isLoading,
    getMyBooking,
    setMyBookingFilter: onSetMyBookingFilter,
  };
};
