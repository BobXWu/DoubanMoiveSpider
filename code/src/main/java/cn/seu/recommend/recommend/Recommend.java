package cn.seu.recommend.recommend;

import org.apache.hadoop.conf.Configuration;
import org.apache.log4j.Level;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

/**
 * Created by corvo on 12/3/16.
 */
public class Recommend {


    public static final Pattern DELIMITER = Pattern.compile("[\t,]");

    public static Configuration config() {
        Configuration conf = new Configuration();
        return conf;
    }

    public static String FILE_INPUT_HEAD = "/home/corvo/Learning/hadoop/Recommend";
    public static String FILE_OUTPUT_HEAD = "/home/corvo/Learning/hadoop/output";

    public static void main(String[] args) throws Exception {
        Map<String, String> path = new HashMap<String, String>();

        path.put("data", Recommend.FILE_INPUT_HEAD + "/data/small2.csv");
        path.put("Step1Input", FILE_INPUT_HEAD+ "/data/small2.csv");
        path.put("Step1Output", FILE_OUTPUT_HEAD + "/step1");

        Step1.run(path);
    }
}
