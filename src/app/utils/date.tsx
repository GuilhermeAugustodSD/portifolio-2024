const calculateYears = (dateString: string) => {
    const today = new Date();
    const dateParam = new Date(dateString);
    const month = today.getMonth() - dateParam.getMonth();
    let years = today.getFullYear() - dateParam.getFullYear();
    if (month < 0 || (month === 0 && today.getDate() < dateParam.getDate())) {
        years--;
    }
    return years
}

export { calculateYears }