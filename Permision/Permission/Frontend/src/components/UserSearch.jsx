import { useState } from 'react'

const UserSearch = () => {
    const [userId, setUserId] = useState('')
    const [userDetails, setUserDetails] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSearch = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch(`http://localhost:3000/api/find/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: parseInt(userId) }),
            })

            const data = await response.json()

            if (response.ok) {
                setUserDetails(data)
                setError(null)
            } else {
                setError(data.message)
                setUserDetails(null)
            }
        } catch (err) {
            setError('Failed to fetch user details')
            setUserDetails(null)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-xl  overflow-hidden">
                <div className="p-6 sm:p-8">
                    <form onSubmit={handleSearch} className="space-y-4">
                        <div>
                            <label htmlFor="userId" className="block text-sm font-semibold text-red-700">
                                Student ID
                            </label>
                            <div className="mt-1 relativem">
                                <input
                                    type="number"
                                    id="userId"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    className="block w-full h-10 border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                    placeholder="Enter student ID number"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            {isLoading ? 'Searching...' : 'Search Student'}
                        </button>
                    </form>

                    {error && (
                        <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                            <p className="text-sm text-red-600">{error}</p>
                        </div>
                    )}

                    {userDetails && (
                        <div className="mt-6 bg-gray-50 rounded-lg p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Student Details</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <DetailItem label="Name" value={userDetails.name} />
                                <DetailItem label="Year" value={userDetails.year} />
                                <DetailItem label="Branch" value={userDetails.branch} />
                                <DetailItem label="Wing" value={userDetails.surabhiwing} />
                                <DetailItem label="Phone" value={userDetails.phonenumber} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const DetailItem = ({ label, value }) => (
    <div>
        <dt className="text-sm font-medium text-gray-500">{label}</dt>
        <dd className="mt-1 text-sm text-gray-900">{value}</dd>
    </div>
)

export default UserSearch 