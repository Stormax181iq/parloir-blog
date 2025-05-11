--
-- PostgreSQL database dump
--

-- Dumped from database version 16.8 (Ubuntu 16.8-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.8 (Ubuntu 16.8-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: decrement_likes_count(); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.decrement_likes_count() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  UPDATE posts SET likes = likes - 1
  WHERE id = OLD.post_id;
  RETURN OLD;
END;
$$;


ALTER FUNCTION public.decrement_likes_count() OWNER TO root;

--
-- Name: increment_likes_count(); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.increment_likes_count() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  UPDATE posts SET likes = likes + 1
  WHERE id = NEW.post_id;
  RETURN NEW;
END;
$$;


ALTER FUNCTION public.increment_likes_count() OWNER TO root;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    posts integer DEFAULT 0 NOT NULL,
    CONSTRAINT categories_posts_check CHECK ((posts >= 0))
);


ALTER TABLE public.categories OWNER TO root;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categories_id_seq OWNER TO root;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: editors_choice; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.editors_choice (
    id integer NOT NULL,
    post_id integer NOT NULL,
    selected_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.editors_choice OWNER TO root;

--
-- Name: editors_choice_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.editors_choice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.editors_choice_id_seq OWNER TO root;

--
-- Name: editors_choice_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.editors_choice_id_seq OWNED BY public.editors_choice.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.likes (
    user_id integer NOT NULL,
    post_id integer NOT NULL,
    liked_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.likes OWNER TO root;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.posts (
    id bigint NOT NULL,
    title character varying(255) NOT NULL,
    content text NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    category_id integer,
    img_src character varying(2083),
    likes integer DEFAULT 0 NOT NULL,
    CONSTRAINT likes_check CHECK ((likes >= 0))
);


ALTER TABLE public.posts OWNER TO root;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.posts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.posts_id_seq OWNER TO root;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(30) NOT NULL,
    hash character(60) NOT NULL,
    description character varying(200),
    profile_pic_src character varying(2083),
    CONSTRAINT check_username_chars CHECK (((username)::text ~ '^[A-Za-z0-9éàê]+(?:[   _-][A-Za-z0-9]+)*$'::text)),
    CONSTRAINT username_not_only_digits CHECK (((username)::text ~ '.*[^0-9].*'::text))
);


ALTER TABLE public.users OWNER TO root;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO root;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: editors_choice id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.editors_choice ALTER COLUMN id SET DEFAULT nextval('public.editors_choice_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: categories categories_title_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_title_key UNIQUE (name);


--
-- Name: editors_choice editors_choice_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.editors_choice
    ADD CONSTRAINT editors_choice_pkey PRIMARY KEY (id);


--
-- Name: editors_choice editors_choice_post_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.editors_choice
    ADD CONSTRAINT editors_choice_post_id_key UNIQUE (post_id);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (user_id, post_id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: posts_title_idx; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX posts_title_idx ON public.posts USING btree (title);


--
-- Name: users_username_idx; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX users_username_idx ON public.users USING btree (username);


--
-- Name: likes likes_delete; Type: TRIGGER; Schema: public; Owner: root
--

CREATE TRIGGER likes_delete AFTER DELETE ON public.likes FOR EACH ROW EXECUTE FUNCTION public.decrement_likes_count();


--
-- Name: likes likes_insert; Type: TRIGGER; Schema: public; Owner: root
--

CREATE TRIGGER likes_insert AFTER INSERT ON public.likes FOR EACH ROW EXECUTE FUNCTION public.increment_likes_count();


--
-- Name: editors_choice editors_choice_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.editors_choice
    ADD CONSTRAINT editors_choice_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id);


--
-- Name: likes likes_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id);


--
-- Name: likes likes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: posts posts_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- Name: posts posts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

