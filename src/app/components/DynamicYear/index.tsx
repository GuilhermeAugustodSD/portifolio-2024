"use client"

import { DynamicYearType } from "@/app/types/date"
import { calculateYears } from "@/app/utils/date"
import { memo, useEffect, useState } from "react"

const DynamicYear = memo(({ date }: DynamicYearType) => {

    const [age, setAge] = useState<number | undefined>()

    useEffect(() => {
        const age = calculateYears(date)
        setAge(age)
    }, [])

    return (
        <>
            {age}
        </>
    )
})

export { DynamicYear }