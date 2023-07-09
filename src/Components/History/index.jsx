const History = (props) => {
    const { history, displayHistory } = props;
    return (
        <>
            <ul>
                {
                    history.length ?
                        history.map((record, index) => (
                            <li key={`history-${index}`}>
                                <button onClick={() => displayHistory(index)}>
                                    {record.method} : {record.url}
                                </button>
                            </li>
                        ))
                        : ''
                }
            </ul>
        </>
    );
};

export default History;