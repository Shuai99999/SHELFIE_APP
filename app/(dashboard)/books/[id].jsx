import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useBooks } from "../../../hooks/useBooks";
import Spacer from "../../../components/Spacer";
import ThemedLoader from "../../../components/ThemedLoader";
import ThemedButton from "../../../components/ThemedButton";
import { Colors } from "../../../constants/Colors";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useLocalSearchParams();
  const { fetchBooksById, deleteBook } = useBooks();
  const router = useRouter();

  const handleDelete = async () => {
    await deleteBook(id);
    setBook(null);
    router.replace("/books");
  };

  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBooksById(id);
      setBook(bookData);
    }
    loadBook();
  }, [id]);

  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText style={styles.title}>{book.title}</ThemedText>
      <ThemedText>Written by {book.author}</ThemedText>
      <Spacer />
      <ThemedText title={true}>Book description:</ThemedText>
      <Spacer height={10} />
      <ThemedText>{book.description}</ThemedText>

      <ThemedButton style={styles.delete} onPress={handleDelete}>
        <ThemedText style={{ color: "#fff", textAlign: "center" }}>
          Delete Book
        </ThemedText>
      </ThemedButton>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },

  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: "center",
  },
});
