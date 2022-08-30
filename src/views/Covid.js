import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
    const [dataCovid, setDataCovid] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // componentDidMount
    useEffect(() => {
        try {
            setTimeout(() => {
                async function fetchData() {
                    let res = await axios.get(
                        "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
                    );
                    let data = res && res.data ? res.data : [];

                    // convert Date to DD/MM/YYYY
                    if (data && data.length > 0) {
                        data.map((item) => {
                            item.Date = moment(item.Date).format("DD/MM/YYYY");
                            return item;
                        });
                    }
                    data.reverse();

                    setDataCovid(data);
                    setIsLoading(false);
                }
                fetchData();
            }, 2000);
        } catch (error) {
            console.log(error.message);
        }
    }, []);

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
                    {isLoading === false &&
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
