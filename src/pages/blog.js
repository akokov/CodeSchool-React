import React from 'react';
import CommentBox from '../components/comment-box';

export default class BlogPage extends React.Component {

	render() {
		return (
			<div>
				<div className="cell">
					<article className="article">
						<h1 className="article-title">React App by Andrii Kokov</h1>

						<div className="article-body">
							<p>
								Let's try and then we'll see ))
							</p>
							<blockquote>
								This is also my first work with my own domain and
								<a src="https://firebase.google.com">Google Firebase</a>
							</blockquote>
							<p>
								I hope I'll succeed with learning Web technologies with
								<a href="https://www.codeschool.com">CodeSchool.com</a>
							</p>
							<p>
								You can find my learn progress by
								<a href="https://www.codeschool.com/users/akokov">Report Link</a>
							</p>
						</div>

					</article>
				</div>

				<CommentBox apiUrl="api/blog/comments.json"/>
			</div>
		);
	}
}