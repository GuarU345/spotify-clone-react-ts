export const Greetings = () => {

    const currentDate = new Date()
    const currentHour = currentDate.getHours()

    let greeting = ""

    if (currentHour < 12) {
        greeting = "Buenos días"
    } else if (currentHour < 18) {
        greeting = "Buenas Tardes"
    } else {
        greeting = "Buenas noches"
    }

    return (
        <p className="text-2xl">{greeting}</p>
    )
}
