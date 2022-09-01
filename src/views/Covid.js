import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from "moment";

const Covid = () => {
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    const priorDate = moment().subtract(31, "days");

    const {
        data: dataCovid,
        isLoading,
        isError,
    } = useFetch(
        // "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
        `https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`
    );

    return (
        <>
            <h3>Covid tracking in VietNam:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading === true && (
                        <tr>
                            <td colSpan={5} style={{ textAlign: "center" }}>
                                Loading data ...
                            </td>
                        </tr>
                    )}

                    {isError === true && (
                        <tr>
                            <td colSpan={5} style={{ textAlign: "center" }}>
                                Something is wrong!
                            </td>
                        </tr>
                    )}

                    {isError === false &&
                        isLoading === false &&
                        dataCovid &&
                        dataCovid.length > 0 &&
                        dataCovid.map((item) => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                    <td>{item.Active}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};

export default Covid;
