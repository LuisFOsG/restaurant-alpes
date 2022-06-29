const TYPE = {
  success: 'bg-sky-300/40 text-cyan-800',
  error: 'bg-red-300/40 text-red-800'
}

const Alert = ({ message, type }) => {
  const style = TYPE[type] || TYPE.success

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen z-[100]">

      <div className='relative min-w-[40%] h-[20%] transition-all'>
        <div className={`w-full h-full flex justify-center items-center text-3xl rounded-lg font-bold ${style}`}>
        { message }
        </div>
      </div>

    </div>
  )
}

export default Alert
