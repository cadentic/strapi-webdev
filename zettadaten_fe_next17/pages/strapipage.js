import * as React from 'react';
import axios from "axios";

export default function StrapiPage(props) {
    return <pre>{JSON.stringify(props, null, 4)}</pre>;
}

StrapiPage.getInitialProps = async () => {
    try {
        let API_ENDPOINT = "http://localhost:1337/api/pages?populate=*";
        const pageData = await axios.get(API_ENDPOINT).then((res) => res.data);

        return {
            props: {
                pageData,
            },
        };
    } catch (error) {
        throw error;
    }
};