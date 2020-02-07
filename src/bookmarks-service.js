const BookmarksService = {
    getAllBookmarks(knex) {
        return knex.select('*').from('bookmarks')
    },
    getById(knex, id) {
        return knex.select('*')
            .from('bookmarks')
            .where('id', id)
            .first()
    },
    deleteBookmark(knex, id) {
        return knex('bookmarks')
            .where('id', id)
            .delete()
    },
    updateBookmark(knex, id, newBookmarkData) {
        return knex('bookmarks')
            .where('id', id)
            .update(newBookmarkData)
    },
    insertBookmark(knex, newBookmark) {
        return knex.insert(newBookmark)
            .into('bookmarks')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    }
};

module.exports = BookmarksService;