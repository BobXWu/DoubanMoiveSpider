package cn.seu.recommend.recommend;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

import java.io.IOException;
import java.util.Map;

/**
 * Created by corvo on 12/4/16.
 */
public class Step1 {

    public static class Step1_ToItemMapper extends Mapper<LongWritable, Text, IntWritable, Text> {
        private final static IntWritable k = new IntWritable();
        private final static Text v = new Text();

        @Override
        protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
            String[] tokens = Recommend.DELIMITER.split(value.toString());
            int userID = Integer.parseInt(tokens[0]);
            String itemID = tokens[1];
            String pref = tokens[2];
            k.set(userID);
            v.set(itemID + ":" + pref);
            context.write(k, v);
        }
    }

    public static class Step1_ToUserVectorReducer extends Reducer<IntWritable, Text, IntWritable, Text> {

        private final static Text v = new Text();

        @Override
        protected void reduce(IntWritable key, Iterable<Text> values, Context context) throws IOException, InterruptedException {
            StringBuilder sb = new StringBuilder();
            for (Text value:values) {
                sb.append("," + value.toString());
            }
            v.set(sb.toString().replaceFirst(",", ""));
            context.write(key, v);
        }
    }

    public static void run(Map<String, String> path) throws IOException, ClassNotFoundException, InterruptedException {
        Configuration conf = Recommend.config();

        Path input = new Path(path.get("Step1Input"));
        Path output = new Path(path.get("Step1Output"));

        Job job = new Job(conf, "Step1");
        job.setJarByClass(Step1.class);

        job.setMapperClass(Step1_ToItemMapper.class);
        job.setCombinerClass(Step1_ToUserVectorReducer.class);
        job.setReducerClass(Step1_ToUserVectorReducer.class);

        job.setOutputKeyClass(IntWritable.class);
        job.setOutputValueClass(Text.class);

        FileInputFormat.addInputPath(job, input);
        FileOutputFormat.setOutputPath(job, output);

        job.waitForCompletion(true);
    }
}
