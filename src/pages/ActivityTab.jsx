import React, { useState } from 'react';

// Mock activity data
const activityData = [
  {
    date: 'Sept 12, 2023 2:19PM',
    actionBy: 'System',
    status: 'UNDER REVIEW',
    message: 'Requires manual review according to matching rules criteria'
  },
  {
    date: 'Sept 12, 2023 2:19PM',
    actionBy: 'System',
    status: 'UNDER REVIEW',
    message: 'Requires manual review according to matching rules criteria'
  },
  // You can add more activity objects here...
];

const ActivityTab = () => {
  const [comment, setComment] = useState('');
  const [oldStatus, setOldStatus] = useState('All');
  const [newStatus, setNewStatus] = useState('All');
  const [filteredActivity, setFilteredActivity] = useState(activityData);

  const [isAddingComment, setIsAddingComment] = useState(false); // To control comment section display
  const [newComment, setNewComment] = useState(''); // To store the new comment

  // Function to filter activities based on search criteria
  const handleSearch = () => {
    const filtered = activityData.filter((activity) => {
      return (
        (comment === '' || activity.message.toLowerCase().includes(comment.toLowerCase())) &&
        (oldStatus === 'All' || activity.status === oldStatus) &&
        (newStatus === 'All' || activity.status === newStatus)
      );
    });
    setFilteredActivity(filtered);
  };

  // Function to handle the new comment submission
  const handleAddComment = () => {
    const newActivity = {
      date: new Date().toLocaleString(),
      actionBy: 'User', // Example: Comment will be added by the user
      status: 'COMMENT ADDED',
      message: newComment
    };
    setFilteredActivity([newActivity, ...filteredActivity]);
    setNewComment('');
    setIsAddingComment(false); // Hide the comment section after submission
  };

  return (
    <div className="activity-tab text-sm text-[#4A5D58]">
      {/* Search Section */}
      <div className="flex flex-wrap gap-4 mb-5">
        <div className="flex flex-col">
          <label htmlFor="comment" className="mb-2">Search by Comment</label>
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C795]"
            placeholder="Comment"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="oldStatus" className="mb-2">Search by Old Application Status</label>
          <select
            id="oldStatus"
            value={oldStatus}
            onChange={(e) => setOldStatus(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="All">All</option>
            <option value="UNDER REVIEW">Under Review</option>
            <option value="APPROVED">Approved</option>
            <option value="DECLINED">Declined</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="newStatus" className="mb-2">Search by New Application Status</label>
          <select
            id="newStatus"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="All">All</option>
            <option value="UNDER REVIEW">Under Review</option>
            <option value="APPROVED">Approved</option>
            <option value="DECLINED">Declined</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="bg-[#00C795]  text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </div>
      </div>

      {/* Add Comment Section */}
      <div className="mb-5">
        <h1 className="mb-4">View Rule Breakdown</h1>
        {!isAddingComment ? (
          <button
            onClick={() => setIsAddingComment(true)}
            className="bg-white border-solid border-2 border-[#4A5D58] px-8 py-2 rounded-md"
          >
            Add Comment
          </button>
        ) : (
          <div className="flex flex-col space-y-3">
            <textarea
              className="border border-gray-300 p-3 resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C795]"
              placeholder="Enter your comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="flex space-x-3">
              <button
                onClick={handleAddComment}
                className="bg-[#00C795] text-white px-4 py-2 rounded-md"
              >
                Submit Comment
              </button>
              <button
                onClick={() => setIsAddingComment(false)}
                className="bg-gray-200 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Activity List */}
      <div className="activity-list space-y-4">
        {filteredActivity.length > 0 ? (
          filteredActivity.slice(0, 4).map((activity, index) => (  // Limit to 4 comments
            <div key={index} className="border-b py-4">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="text-sm text-gray-600">{activity.message}</div>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Date: {activity.date} | Action by: {activity.actionBy} | Status: {activity.status}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No matching records found.</p>
        )}
      </div>
    </div>
  );
};

export default ActivityTab;
